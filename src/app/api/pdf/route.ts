
import axios from "axios";
import { NextResponse,NextRequest } from "next/server";
import cheerio  from "cheerio";
export async function POST(req:Request) {
    try {
        let Result={right:0, wrong:0,unattempt:0,total:0}
        const { url } = await req.json();
        console.log(url);

        // Fetch the PDF file from the URL
        const response = await axios.get(url);
        const html = response.data;

   // Load the HTML content into cheerio
   const $ = cheerio.load(html);

   // Select elements with the class name 'question-pnl'
   const questionPanels = $('.question-pnl');

   // Extract the text content of the first 'rightAns' element within each 'question-pnl'
    questionPanels.map((index, element) => {
       const rightAns = $(element).find('.rightAns').first().text().substr(0,1);
       
       const chooseAns= $(element).find('.menu-tbl').first().find('tbody').first().children().eq(6).text().substr(-1)
       Result.total=Result.total+1
if(rightAns==chooseAns){
    Result.right=Result.right+1

}
else if(chooseAns==" "){
    Result.unattempt=Result.unattempt+1
}
else{
    Result.wrong=Result.wrong+1
}
       return { rightAns, chooseAns };
   }).get();

   console.log(Result);
Result.total-=20;
Result.unattempt-=20;
        // Return the PDF text as JSON
        return NextResponse.json({ text: "pdfText",Result });
    } catch (error) {
        console.error('Error converting PDF to JSON:', error);
        return NextResponse.json({ error: 'Failed to convert PDF to JSON' }, { status: 500 });
    }
}