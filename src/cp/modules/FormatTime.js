export function formatTime(d) {
    var dd = d.split(":");
    var hours = parseInt(dd[0]);
    var ampm = "am"
    if (hours > 12)
    {
        hours -= 12;
        ampm = "pm"
        }
    return ""+hours+":"+dd[1]+" "+ampm
}