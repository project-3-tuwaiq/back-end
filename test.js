const today = new Date().toDateString();
const yesterday = 'Mon Dec 20 2021'

console.log(today);
console.log(yesterday);
console.log(today==yesterday)

const visit = [
    {date: today, checkedByNurse: false},
    {date: yesterday, checkedByNurse: true},
    {date: today, checkedByNurse: true},
    {date: yesterday, checkedByNurse: false},
  ];
console.log(visit)
  const result = visit.find( ({ date }) =>  date === today );
//   const result = inventory.find( ({ name }) => name === 'cherries' );
console.log('Patient: '+ result.today, result.checkedByNurse) // { name: 'cherries', quantity: 5 }

