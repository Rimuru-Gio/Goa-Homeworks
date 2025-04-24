let users = ["გიორგი ბიბილაშვილი", "ნიკა ნიკოლაძე", "მარიამ მჟავანაძე"];
let initials = [];

for (let i = 0; i < users.length; i++) {
    let nameParts = users[i].split(" ");
    let initial = nameParts[0][0] + "." + nameParts[1][0];
    initials.push(initial);
}

console.log(initials); 
