const HandyStorage = require('handy-storage');

const storage = new HandyStorage({
    beautify: true
});
function set_array() {
    lname.push(document.getElementById('name').value)
    lnum.push(document.getElementById('num').value)
    lup.push(document.getElementById('up').value)
    ldown.push(document.getElementById('down').value)
    lhit.push(document.getElementById('hit').value)

storage.connect('./information.json'); 
storage.setState({
    name: lname,
    num: lnum,
    up: lup,
    down: ldown,
    hit: lhit,
    visited: storage.state.visited || 0
})

storage.setState({
    visited: storage.state.visited + 1
})
for (var i = 0; i < visited;i++){
    console.log(JSON.stringify(storage.state[i]))
}

}