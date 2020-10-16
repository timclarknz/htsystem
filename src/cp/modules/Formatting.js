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

export function formatDate(d) {
    const g = d.substr(0,10)
    const h = g.split("-")
    return h[2]+"/"+h[1]+"/"+h[0]
}

export function formatPhone(p) {

    return p.substr(0,3)+"-"+p.substr(2,3)+"-"+p.substr(5,4)
}