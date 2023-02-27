var index=0;
function changeColors() {
    
    let colors = ['red', 'green', 'blue','orange']
    document.getElementsByTagName('body')[0].style.backgroundColor = colors[index++];

    if(index>colors.length-1){
        index = 0;
    }
}