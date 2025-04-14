let month = prompt("შეიყვანეთ თვის სახელი")
let season
switch(month) {
    case "მარტი":
    case "აპრილი":
    case "მაისი":
        season = "გაზაფხული"
        break
        case "ივნისი":
    case "ივლისი":
    case "აგვისტო":
        season = "ზაფხული"
        break
        case "სექტემბერი":
    case "ოქტომბერი":
    case "ნოემბერი":
        season = "შემოდგომა"
        break
    case "იანვარი":
    case "თებერვალი":
    case "დეკემბერი":
        season = "ზამთარი"
        break
    
}
alert(`${month} არის ${season}.`)