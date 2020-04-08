// Зробити компютерний клуб з горою компів.
// Має бути загальний клас компа від якого всі будуть наслідуватись.
// Мають бути стаціонрані компи, ноутбуки, ультрабуки, моноблоки і так далі.
// В деяких компів має бути метод який оновляє йому хартеристики. Деякі компи мають бути з жостики параметрами, типу ультрабуків в яких ти не можеш нічого міняти.
// На кожному компі можна пограти ігри.
// Гра також має бути створена як клас з жанорм і симтемними вимогами.
// Гру ти передаєш як аргумент в метод. І якшо гра занадто важка для компа, ти маєш бачити шо її не запустити тут. Якшо вона 1 в 1 як комп, то має бути повідомлення, що гра лагає. Якшо все чудово, то ти будеш грати в неї без проблем.
// Ну і мають бути компи на яких заборонено грати ігри.
// Наприклад моноблоки або сервери, які використовуються тільки для роботи

class ComputerClub {
    constructor(...computers) {
        console.log(computers);
    }
}

class Computer {
    constructor(systemChar, isPlayComputer, isChangeable) {
        this.systemChar = systemChar;
        this.isPlayComputer = isPlayComputer;
        this.isChangeable = isChangeable;
    }

    play(game) {
        if (this.isPlayComputer == true && game.systemRequirements < this.systemChar) {
            console.log('Игра запустилась без проблем, играем.')
        } else if (game.systemRequirements === this.systemChar) {
            console.log('Игра лагает.')
        } else {
            console.log('Игру невозможно запустить. Доступ запрещен.')
        }
    };

    renew() {
        if (this.isChangeable) {
            this.systemChar = 110;
        } else {
            console.log('This device can not be changeable');
        }
    }

    info() {
        console.log(this);
    }
}

class PersonalComputer extends Computer {
    constructor(name, systemChar, isPlayComputer, isChangeable) {
        super(systemChar, isPlayComputer);
        this.name = name;
        this.systemChar = systemChar;
        this.isPlayComputer = isPlayComputer;
        this.isChangeable = isChangeable;
    }

    play(game) {
        super.play(game);
    }

    renew() {
        super.renew();
    }

    info() {
        super.info();
    }
}

class Laptop extends Computer {
    constructor(name, systemChar, isPlayComputer, isChangeable) {
        super(systemChar, isPlayComputer, isChangeable);
        this.name = name;
        this.systemChar = systemChar;
        this.isPlayComputer = isPlayComputer;
        this.isChangeable = isChangeable;
    }

    play(game) {
        super.play(game);
    }

    renew() {
        super.renew();
    }

    info() {
        super.info();
    }

}

class Ultrabook extends Computer {
    constructor(name, systemChar, isPlayComputer, isChangeable) {
        super(systemChar, isPlayComputer, isChangeable);
        this.name = name;
        this.systemChar = systemChar;
        this.isPlayComputer = isPlayComputer;
        this.isChangeable = false;
    }

    play(game) {
        super.play(game);
    }

    info() {
        super.info();
    }

}

class Server extends Computer {
    constructor(name, systemChar, isPlayComputer, isChangeable) {
        super(systemChar, isPlayComputer, isChangeable);
        this.name = name;
        this.systemChar = 100;
        this.isPlayComputer = false;
        this.isChangeable = false;
    }

    info() {
        super.info();
    }
}

class Game {
    constructor(name, genre, systemRequirements) {
        this.name = name;
        this.genre = genre;
        this.systemRequirements = systemRequirements;
    }
}

const game_mafia = new Game('Mafia 2', 'Action-adventure', 70);
const game_cs = new Game('Counter Strike', 'First-person shooter', 50);
const game_fifa = new Game('Fifa 2020', 'Sports', 110);
const game_trine = new Game('Trine', 'Adventure', 90);
const game_gta = new Game('GTA V', 'Action-adventure', 150);
const game_sims = new Game('The Sims 3', 'Simulator', 60);

const asus = new PersonalComputer('Asus', 230, true, true);
const iMac = new PersonalComputer('iMac', 150, true, false);
const lenovo = new PersonalComputer('Lenovo', 190, true, false);
const hp = new PersonalComputer('HP', 220, false, true);
const dell = new PersonalComputer('Dell', 250, true, false);

const macbook = new Laptop('Macbook Pro', 120, true, false);
const dellLaptop = new Laptop('Dell Inspiron', 180, true, true);
const msi = new Laptop('MSI ', 200, true, false);
const asusLaptop = new Laptop('Asus', 70, false, true);
const acer = new Laptop('Acer', 80, false, false);


const dell_xps = new Ultrabook('Dell XPS', 100, true, false);
const hp_envy = new Ultrabook('HP Envy', 100, false, false);
const macbook_air = new Ultrabook('Macbook Air', 90, false, false);
const lenovo_ideapad = new Ultrabook('Lenovo IdeaPad', 80, false, true);
const lenovo_thinkpad = new Ultrabook('Lenovo ThinkPad', 90, false, true);

const db_server = new Server('PostgreSQL Server', 1000, false, false);
const google_server = new Server('Google Server', 3500, false, false);
const amazon_server = new Server('Amazon Server', 2500, false, false);
const uber_server = new Server('Uber Server', 1200, false, false);
const jetbrains_server = new Server('JetBrains Server', 2000, false, false);

const computerClub = new ComputerClub(asus, iMac, lenovo, hp, dell, macbook, dellLaptop, msi, asusLaptop, acer, dell_xps, hp_envy, macbook_air, lenovo_ideapad, lenovo_thinkpad,
    db_server, google_server, amazon_server, uber_server, jetbrains_server);
console.log(computerClub);
