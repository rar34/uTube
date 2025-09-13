function getTimeString (time){
    const hours = parseInt(time / 3600);
    let remainingSecond = time % 3600;
    const minute = parseInt(remainingSecond / 60 );
    const second = remainingSecond % 60;

    return `${hours} hours ${minute} minutes ${second} seconds ago`
}

console.log(getTimeString(7865));