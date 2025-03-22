//calculating the net salary

function calculateSalary(basicSalary, benefits, pensionablePay) {
    // Constants
    const PERSONAL_RELIEF = 2400; // Monthly
    const INSURANCE_RELIEF = 5000; // Monthly
    const SHIF_RATE = 0.0275; // 2.75% for SHIF

// PAYE tax brackets and rates
const PAYE_BRACKETS = [
    { limit: 24000, rate: 0.10 },   // Up to Ksh 24,000
    { limit: 32333, rate: 0.25 },   // 24,001 - 32,333
    { limit: 500000, rate: 0.30 },  // 32,334 - 500,000
    { limit: 800000, rate: 0.325 }, // 500,001 - 800,000
    { limit: Infinity, rate: 0.35 }, // Above 800,000
];

// Calculate Gross Salary
const grossSalary = basicSalary + benefits;

// 1. Calculate PAYE (Progressive Tax Calculation)
let taxableIncome = grossSalary - PERSONAL_RELIEF - INSURANCE_RELIEF; // Subtracting reliefs
let paye = 0;

 // Apply PAYE brackets
 let remainingIncome = taxableIncome;
 for (let i = 0; i < PAYE_BRACKETS.length; i++) {
     let bracket = PAYE_BRACKETS[i];
     let upperLimit = bracket.limit;
     let rate = bracket.rate;

     if (remainingIncome > upperLimit) {
         paye += upperLimit * rate;
         remainingIncome -= upperLimit;
     } else {
         paye += remainingIncome * rate;
         break;
     }
 }

 // 2. Calculate SHIF Deduction (2.75% of Gross Salary)
 let shifDeduction = grossSalary * SHIF_RATE;

 // 4. Calculate NSSF Deduction
 let nssfDeduction = 0;
 if (pensionablePay <= 8000) {
     nssfDeduction = pensionablePay * 0.06; // Tier I (Up to 8,000)
 } else if (pensionablePay <= 72000) {
     nssfDeduction = pensionablePay * 0.06; // Tier II (8,001 - 72,000)
 }

 // Calculate Total Deductions
 let totalDeductions = paye + shifDeduction + nssfDeduction;

  // 5. Calculate Net Salary
  let netSalary = grossSalary - totalDeductions;

   // Return the result as an object for clarity
   return {
    grossSalary: grossSalary,
    paye: paye,
    shifDeduction: shifDeduction,
    housingLevy: housingLevy,
    nssfDeduction: nssfDeduction,
    totalDeductions: totalDeductions,
    netSalary: netSalary
};
}
// Example Usage:
const basicSalary = 40000;  
const benefits = 10000;     
const pensionablePay = 15000;

const result = calculateSalary(basicSalary, benefits, pensionablePay);

console.log("Gross Salary: Ksh", result.grossSalary);
console.log("PAYE: Ksh", result.paye);
console.log("SHIF Deduction: Ksh", result.shifDeduction);
console.log("NSSF Deduction: Ksh", result.nssfDeduction);
console.log("Total Deductions: Ksh", result.totalDeductions);
console.log("Net Salary: Ksh", result.netSalary);