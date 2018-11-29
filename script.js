const readyMarts = [
    {name: "Enrique" + "Castano" + "Carrillo"},
    {hourlyRate: 28},
    {hoursWorked: 70}

];
//console.log(readyMart);
class Payroll {
    constructor(readyMarts){
        this.readyMarts = readyMarts;
        this.names = getNames;
        this.arrs = arrs;
        this.arrs = [];
        this.fullTimes = getFullTimes;
        this.hoursWorked = hoursWorked;
        
        this.getTotalLabor = getTotalLabor;
    }

getNames(){
    return this.readyMarts.map(readyMart => {
        return readyMart.arrs.sort()
        });
    }


getFullTimes() {
    return this.getNames.filter(name => {
        if (name.hoursWorked > 60) {
            return true;
        }
    });
}

getTotalLabor(){
    return this.getNames.reduce((acc,  hourlyRate) => {
        if(this.getNames.length === hourlyRate){
            return(acc * hourlyRate);
        }
    },0)
};
}




