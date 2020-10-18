module.exports = function check(str, bracketsConfig) {
     let arr = config.map((a) =>
        a = a[0] + a[1]
    );
    let i = 0;
    
    while ( i < str.length/2) {
        arr.filter((item) => {
            while (str.indexOf(item) !== -1) {
                str = str.replace(item, "");
                console.log(str)
            }
        })
        i++;
    }
    return str.length === 0 ;
}
