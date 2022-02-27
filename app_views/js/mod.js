
var m =document.getElementById('d_body');
var b =document.getElementById('but');
b.style.backgroundColor="seashell";
m.style.backgroundColor="dimgrey";
function mod() {
    
    if (m.style.backgroundColor=="seashell") {
        m.style.backgroundColor="dimgrey";
        b.style.backgroundColor="seashell";
        
    } else
    {
        m.style.backgroundColor="seashell";
        b.style.backgroundColor="dimgrey";
        
    }
    
}
