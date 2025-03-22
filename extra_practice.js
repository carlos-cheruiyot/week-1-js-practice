//solution 1:Bubblesort
function bubbleSort(arr) {
    let n = arr.length;
    
    // Outer loop for each pass
    for (let i = 0; i < n; i++) {
        // Inner loop to compare each pair of adjacent elements
        for (let j = 0; j < n - 1 - i; j++) {
            // If the current element is greater than the next one, swap them
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    
    return arr;
}

// Example usage
const input = [5, 6, 1, 3, 4, 2];
console.log(bubbleSort(input)); // Output: [1, 2, 3, 4, 5, 6]


//solution two:staircase problem
function steps(n) {
    for (let i = 1; i <= n; i++) {
        let step = '';  
        for (let j = 1; j <= i; j++) {
            step += '#'; 
        }
        console.log(step); 
    }
}

// Example usage
steps(2);
steps(3);

//solution three:Volume of a Cylinder (Using Objects)

// Object Constructor for Cylinder
function Cylinder(radius, height) {
    this.radius = radius;
    this.height = height;

    // Method to calculate the volume
    this.volume = function() {
        return (Math.PI * Math.pow(this.radius, 2) * this.height).toFixed(4);
    };
}

// Example usage
const cylinder = new Cylinder(5, 10);
console.log("Volume of the cylinder: " + cylinder.volume()); 
