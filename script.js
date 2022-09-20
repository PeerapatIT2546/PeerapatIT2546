function test() {
    var name_l = document.getElementById("name").value;
    var num_l = document.getElementById("num").value;
    var up_l = document.getElementById("up").value;
    var down_l = document.getElementById("down").value;
    var hit_l = document.getElementById("hit").value;

    var lname = localStorage.setItem("name", name_l)
    var lnum = localStorage.setItem("num", num_l)
    var lup = localStorage.setItem("up", up_l)
    var ldown = localStorage.setItem("down", down_l)
    var lhit = localStorage.setItem("hit", hit_l)

    
    var lname = localStorage.getItem("name", name_l)
    var lnum = localStorage.getItem("num", num_l)
    var lup = localStorage.getnItem("up", up_l)
    var ldown = localStorage.getItem("down", dow_l)
    var lhit = localStorage.getItem("hit", hit_l)
}
