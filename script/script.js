$(function() {
    $("#back").click(function() {
        window.location.href = "https://danylonevidomyi.github.io/individual/";
    })

    let username = prompt("Уведіть, будь ласка, своє ім'я: ", "User");

    document.getElementById("username").innerHTML = username;
    
    // для випадкових чисел юзера
    function UserRandomPoints()
    {
        let UserRandomPoint = Math.floor(Math.random() * 7);
        document.getElementById("p-user-points").innerHTML = "Ваше число: " + UserRandomPoint;
        return UserRandomPoint;
    }
    // для випадкових чисел ком'ютера
    function ComputerRandomPoints()
    {
        let ComputerRandomPoint = Math.floor(Math.random() * 7);
        document.getElementById("p-computer-points").innerHTML = "Число комп'ютера: " + ComputerRandomPoint;
        return ComputerRandomPoint;
    }
    
    
    // кнопка для генерації
    document.getElementById("button").addEventListener('click', () => 
    {
        UserRandomPoints();
        ComputerRandomPoints();
        winner();
    });
    
    let userWinPoint = 0;
    let compWinPoint = 0;
    
    function winner()
    {
        if (UserRandomPoints() > ComputerRandomPoints())
        {
            userWinPoint += 1;
        }
        else
        {
            compWinPoint += 1;
        }
    
        document.getElementById("p-winner").innerHTML = ("Очки: " + userWinPoint + " - " + compWinPoint);
    
        if (userWinPoint == 3)
        {
            alert("Вітаю! Ви перемогли");
            document.querySelector("#happyNecoArc").style.display = "block";
            document.getElementById("button").disabled = true;
        }
        else if (compWinPoint == 3)
        {
            alert("На жаль, ви програли :(");
            document.querySelector("#sadNecoArc").style.display = "block";
            document.getElementById("button").disabled = true;
        }
    
    }
    
    // перезавантаження сторінки для нової гри
    document.getElementById("new-game").addEventListener('click', function()
    {
        location.reload();
    })  
})