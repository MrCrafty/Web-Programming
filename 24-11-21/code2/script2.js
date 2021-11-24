var i,j;
document.write("<table>")
for(i = 0; i < 10; i++){
    document.write("<tr>")
    for(j = 0; j < 10; j++){
        if(i%2==0){
        document.write("<td class = \"bgColor\">" + j + "</td>")
        }
        else{
            document.write("<td class = \"bgColor2\">" + j + "</td>")
        }
    }
    document.write("</tr>")
}

document.write("</table>")
