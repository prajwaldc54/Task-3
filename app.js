function shortestTime(n, m, a, b, c, d) {
    if (n === 0) {
      return 0;
    } else if (n > m){
        let case1 = a * (n-m) + 2 * b + c + a * n;
        let case2 = d * n;
        let case3 = d * (n-m) + 2 * b +c + a * m;
      
        if (case1<=case2 && case1<=case3){
        return case1;
        }
        else if(case2<=case1 && case2<=case3){
        return case2;
        }
        else if (case3<=case1 && case3<=case2){
        return case3;
        }
    }
    else if (n < m){
        let case1 = a* (m-n) + 2 * b + c + a*n;
        let case2 = d * n;
        
        if (case1<= case2){
          return case1;
        }
        else{
          return case2;
        }
    }
    else if (n === m){
        let case1= n * a + 2 * b + c;
        let case2 =d * n;

        if(case1 < case2){
            return case1;
        }
        else{
            return case2;
        }
    }
}
// Example cases

//For n = 4, m = 5 and speeds = [1,2,3,10], the output should be 12.
//John go downstairs by using the elevator:
console.log(shortestTime(4, 5, 1, 2, 3, 10));

// For n = 0, m = 5 and speeds = [1,2,3,10], the output should be 0.
// John is already at 0 floor, so the output is 0.
console.log(shortestTime(0, 5, 1, 2, 3, 10));

// For n = 4, m = 3 and speeds = [2,3,4,5], the output should be 20.
// John go downstairs by walking:
// 5 x 4 = 20
console.log(shortestTime(4, 3, 2, 3, 4, 5));

// Pure walk would have taken 7×4 = 28; pure elevator would have taken 1×3 +
// 1 + 1 + 7×3 + 1 = 27.
console.log(shortestTime(7, 6, 3, 1, 1, 4));
