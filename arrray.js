// // reverse a number without using string

// // var num = 523;
// // var rev = 0;
// // while(num>0){
// //     rev = rev*10+num%10;
// //     num = Math.floor(num/10);
// // }
// // console.log(rev);

// // //Given an array A having N non-negative integers. Find the element that occurs more than N/2 times.
// // var arr = [1,1,1,1,2,3];
// // var n = 6;
// // //brut forece itrets two loops i and j and make a count global var;
// // var obj = {};
// // for(var i=0;i<arr.length;i++){
// //     if(obj[arr[i]] >=1 ){
// //         obj[arr[i]]++;
// //     }
// //     else{
// //         obj[arr[i]] = 1;
// //     }
// // }
// // for(key in obj){
// //     if(obj[key]>n/2){
// //         console.log(key)
// //         break
// //     }
// // }

// //sprate odd and even number
// //brute force
// // var arr = [1,3,5,2,7,4];
// // var odd = [];
// // var even = [];
// // for(var i=0; i<arr.length; i++){
// //     if(arr[i]%2==0){
// //         even.push(arr[i]);
// //     }
// //     else{
// //         odd.push(arr[i]);
// //     }
// // }
// // var res = even.concat(odd);
// // console.log(res);
// //two pointer
// // function swap(arr,i,j){
// //     var temp = arr[i];
// //     arr[i] = arr[j];
// //     arr[j] = temp;
// //     return arr;
// // }
// // var arr = [4,2,5,8,7,1];
// // var n = 6;
// // var i = 0;
// // var j = n-1;
// // while (i < j) {
// //     while(arr[i] %2 == 0 && i<j){
// //         i++;
// //     }
// //     while(arr[j] %2 ==1 && i<j){
// //         j--;
// //     }
// //     if(i<j){
// //         swap(arr,i,j)
// //     }
// // }
// // console.log(arr)

// //Find the closest sum of two number to 0;
// //Brut force
// // var arr = [ 1,2,6,9,-5,-2];
// // var min = arr[0] + arr[1];
// // for(var i=0; i<arr.length; i++){
// //     for(var j=i+1;j<arr.length;j++){
// //         var sum =arr[i]+arr[j];
// //         if(sum>0){
// //             if(sum-0 < min-0){
// //                 min = sum;
// //             }
// //         }
// //         else{
// //             if(0-sum < min-0){
// //                 min = sum;
// //             }
// //         }
// //     }
// // }
// // console.log(min);
// //two pointer
// // var arr = [ 1,2,6,9,-5,-2];
// // arr.sort((a,b)=>a-b)
// // var l = 0;
// // var r = arr.length - 1;
// // var minSum = 0;
// // while(l < r){
// //     var sum = arr[l]+arr[r];
// //     if(sum>0){
// //         minSum = arr[l]+arr[r];
// //         r--;
// //     }
// //     else if(sum<0){
// //         minSum = arr[l]+arr[r];
// //         l++;
// //     }
// //     else if(sum == 0){
// //         l++;r--;
// //     }
// // }
// // console.log(minSum);

// // Three sum
// // var k = 3;
// // var arr = [ 1,2,6,9,-5,-2];
// // arr.sort((a,b)=>a-b)
// // for(var i = 0; i<arr.length;i++){
// //     var l = i+1;
// //     var r = arr.length-1;
// //     while(l<r){
// //         var sum = arr[l]+arr[r]+arr[i];
// //         if(sum>k){
// //             r--;
// //         }
// //         else if(sum<k){
// //             l++
// //         }
// //     }
// // }
// // console.log(sum)
// //bubble sort;
// // var arr = [2,0,1];
// // for(var i=0; i<arr.length; i++){
// //     for(var j=0; j<arr.length; j++){
// //         if(arr[j]>arr[j+1]){
// //             var temp = arr[j];
// //             arr[j] = arr[j+1];
// //             arr[j+1] = temp;
            
// //         }
// //     }
// // }
// // console.log(arr);

// //Rotate array 

// // var arr = [1,2,3];
// // var k = 2;
// // while(k!=0){
// //     var temp = [];
// //     temp.push(arr[arr.length-1]);
// //     for(var i=0;i<arr.length-1;i++){
// //         temp.push(arr[i]);
// //     }
// //     arr = temp;
// //     k--;
// // }
// // console.log(temp)
// // Twice expects 1
// // var arr = [1,2,1,3,2];
// // var obj = {};
// // for(var i=0; i<arr.length; i++){
// //     if(obj[arr[i]]>=1){
// //         obj[arr[i]]++;
// //     }
// //     else {
// //         obj[arr[i]] = 1;
// //     }
// // }
// // if(obj[0]){
// //     console.log(arr[1]);
// // }

// // // pod of array leving i element
// // var arr = [1,2,3,4,5];
// // var temp = [];
// // for(var i=0;i<arr.length;i++) {
// //     var pod = 1;
// //     for(var j=0;j<arr.length;j++){
// //         if(i!=j){
// //             pod *= arr[j];
// //         }
// //     }
// //     temp.push(pod);
// // }
// // console.log(temp);

// //eqibilirium element
// // var arr = [3,3,5,5,1];
// // var sum = 0;
// // for (var i = 0; i < arr.length; i++){
// //     sum += arr[i];
// // }
// // var left = 0;
// // for (var j = arr.length -1; j >=0; j--){
// //     sum -= arr[j];
// //     if(left == sum){
// //         console.log(j+1);
// //         break;
// //     }
// //     left += arr[j];

// // }
// // var arr = [1,2,3,4];
// // var arr1 = [1,2,2,4];
// // var obj = {};
// // for(var i=0;i<arr.length;i++){
// //     if(obj[arr[i]]>=1){
// //         obj[arr[i]]++;
// //     }
// //     else{
// //         obj[arr[i]] = 1;
// //     }
// // }
// // for(var j=0;j<arr.length;j++){
// //     if(obj[arr1[j]]){
// //         obj[arr1[j]]--;
// //     }
// // }
// // console.log(obj);

// //union array
// // var arr = [85,25,1,32,54,6];
// // var arr1 = [85,2];
// // var i = 0;
// // var j = 0;
// // var temp = [];
// // while(i<arr.length && j<arr1.length){ 
// //     if(arr[i]!=arr1[j]){
// //         arr.push(arr1[j]);
// //     }
// //     i++;j++;
// // }

// // console.log(arr)

// // var arr = [0,2,1,2,0];
// // var obj = {};
// // for(var i=0; i<arr.length; i++){
// //     if(obj[arr[i]]>=1){
// //         obj[arr[i]]++
// //     }
// //     else {
// //         obj[arr[i]] = 1;
// //     }
// // }
// // var k = 0;
// // for(key in obj){
// //     while(obj[key]){
// //         arr[k] = key;
// //         k++;
// //         obj[key]--;
// //     }
// // }
// // console.log(arr)

// //kth smallest element
// // var arr = [7, 10, 4, 3, 20, 15];
// // k = 3;
// // arr.sort((a,b)=>a-b);
// // console.log(arr[k-1]);


// //Subarray with given sum
// // var arr = [1,2,3,7,5];
// // var s = 12;
// // var n = 5;
// // for(var i = 0; i < n; i++){
// //     var sum = 0;
// //     for(var j = i; j <arr.length;j++){
// //         sum += arr[j];
// //         if(sum == s){
// //             console.log(i,j);
// //             break;
// //         }
// //     }
// // }

// //move all no negative elements to the right

// //brute force
// // var arr = [1, -1, 3, 2, -7, -5, 11, 6];
// // var temp = [];
// // var temp1 = [];
// // for (var i = 0; i < arr.length; i++) {
// //     if(arr[i]>=0){
// //         temp.push(arr[i]);
// //     }
// //     else{
// //         temp1.push(arr[i])
// //     }

// // }
// // console.log(temp.concat(temp1))

// //rotate array once 
// // k = 1;
// // var arr = [1, 2, 3, 4, 5];
// // var temp = [];
// // temp.push(arr[arr.length-1]);
// // for (var i = 0; i < arr.length-1; i++){
// //     temp.push(arr[i]);
// // }
// // console.log(temp);

// //find missing initiger in range 1-N;
// // var arr = [6,1,2,8,3,4,7,10,5];
// // arr.sort((a,b)=>a-b);
// // var k = arr[0];
// // for(var i=0; i<arr.length; i++){
// //     if(arr[i]== k){
// //         k++;
// //     }
// //     else{
// //         console.log(k);
// //         break;
// //     }
// // }

// //  count pair with given sum
// // var arr = [1,5,7,1];
// // var k = 6;
// // var n = 4;
// // arr.sort((a,b)=>a-b);
// // var i = 0;
// // var j = n-1
// // while (i < j){
// //     var sum = arr[i]+arr[j];
// //     if(sum == k){
// //         console.log(arr[i],arr[j])
// //         break;
// //     }
// //     else if(sum>k){
// //         j--;
// //     }
// //     else if(sum<k){
// //         i++
// //     }
// // }
// // arr.sort((a,b)=>a-b)
// // k=13;
// // function fun(arr,k){
// //     for(var i=0;i<arr.length;i++){
// //         var start = i+1;
// //         while(start < arr.length){
// //             var mid = start + 1;
// //             var end = arr.length-1;
// //             while(mid<end){
// //                 var sum = arr[i]+arr[start]+arr[mid]+arr[end];
// //                 if(sum == k){
// //                     return [arr[i],arr[start],arr[mid] ,arr[end]];
// //                 }
// //                 else if(sum > k){
// //                     end--;
// //                 }
// //                 else{
// //                     mid++;
// //                 }
// //             }
// //             start++
// //         }
// //     }
// // }
// // console.log(fun(arr,14))

// // var arr = [2,3,1,2,3];
// // var obj = {};
// // for(var i=0; i<arr.length; i++){
// //     if(obj[arr[i]]>=1){
// //         obj[arr[i]]++
// //     }
// //     else{
// //         obj[arr[i]] = 1;
// //     }
// // }
// // var arr = [];
// // for(key in obj){
// //     if(obj[key]>1){
// //         arr.push(key)
// //     }
// // }
// // console.log(arr)
// // var arr = [2,3,1,2,3];
// // var res = [];
// // for(var i=0;i<arr.length;i++){
// //     if(arr[Math.abs(arr[i])]>=0){
// //         arr[Math.abs(arr[i])] = -arr[Math.abs(arr[i])];
// //     }
// //     else{
// //         res.push(Math.abs(arr[i]))
// //     }
// // }
// // console.log(res)
// // var arr = [1,2,3,-2,5];
// // var n = 5;
// // var max = 0;
// // for(var i=0; i<n; i++){
// //     var sum = 0;
// //     for(var j=i; j<n; j++){
// //         sum += arr[j];
// //     }
// //     if(sum>max){
// //         max = sum;
// //     }
// // }
// // console.log(max);

// // same no in all aray
// // var a = [1, 5, 10, 20, 40, 80,80];
// // var b = [6, 7, 20, 80, 100];
// // var c = [3, 4, 15, 20, 30, 70, 120];
// // var obj = {};
// // for(var i = 0; i <a.length;i++){
// //     obj[a[i]] = 1;
// // }
// // for(var j=0; j<b.length;b++){
// //     if(obj[b[j]]>=1){
// //         obj[b[j]]++
// //     }
// //     else{
// //         obj[b[j]] = 1
// //     }
// // }
// // for(var k=0; k<c.length;k++){
// //     if(obj[c[k]]>=1){
// //         obj[c[k]]++
// //     }
// //     else{
// //         obj[c[k]] = 1
// //     }
// // }
// // var res = [];
// // for(key in obj){
// //     if(obj[key]>1){
// //         res.push(key)
// //     }
// // }
// // console.log(res)
// // var arr = [1,2,3,4,5,0];
// // var j = 0;
// // while(j<arr.length){
// //     if(arr[0]<=arr[j]){
// //         j++;
// //     }
// //     else {
// //         console.log(arr[j]);
// //         break;
// //     }
// // }


// //ist repeting element in array

// // var arr = [1, 5, 3, 4, 3, 5, 6];
// // var obj = {};
// // for(var i = 0;i<arr.length;i++){
// //     if(obj[arr[i]]>=1){
// //         obj[arr[i]]++
// //     }
// //     else {
// //         obj[arr[i]] = 1;
// //     }
// // }
// // for(var j=0;j<arr.length;j++){
// //     if(obj[arr[j]]>1){
// //         console.log(arr[j]);
// //         break;
// //     }
// // }


// //find subarray whose have equal no of 0 ana 1;
// // var arr = [1,0,0,1,0,1,1];
// // var res = [];
// // for(var i=0;i<arr.length;i++){
// //     for(var j=i;j<arr.length;j++){
// //         var temp = [];
// //         for(var k=i;k<=j;k++){
// //             temp.push(arr[k]);
// //         }
// //         res.push(temp);
// //     }
// // }
// // var n = 0;
// // for(let i=0;i<res.length;i++){
// //     var zero = 0;
// //     var one = 0; 
// //     for(let j=0;j<res[i].length;j++){
// //         if(res[i][j]==0){
// //             zero++;
// //         }
// //         else{
// //             one++;
// //         }
// //     }
// //     if(one == zero){
// //         n++;
// //     }
// // }
// // console.log(n)

// //alternative +ve -ve init in array

// // var arr = [9, 4, -2, -1, 5, 0, -5, -3, 2];
// // var pos = [];
// // var negative = [];
// // for(var i = 0; i < arr.length; i++){
// //     if(arr[i]<0){
// //         negative.push(arr[i]);
// //     }
// //     else{
// //         pos.push(arr[i]);
// //     }
// // }
// // var p = 0;
// // var n = 0;
// // for(var k=0;k<arr.length;k++){
// //     if(k%2==0){
// //         arr[k] = pos[p];
// //         p++;
// //     }
// //     else{
// //         arr[k] = negative[n];
// //         n++;
// //     }
// // }
// // console.log(arr);

// //find subarray whose sum = 0 

// // var arr = [4,2,-3,1,6];
// // var temp = [];
// // function checkArray(arr){
// // for (var i = 0; i < arr.length; i++){
// //     var sum = 0;
// //     for (var j = i; j <arr.length;j++){
// //         sum += arr[j];
// //         if(sum == 0){
// //             console.log('yes')
// //             return
// //         }
// //     }
// // }
// // console.log('no')
// // }
// // checkArray(arr)


// //subarray with max pod
// // var arr = [2,3,4,5,-1,0];
// // var max = 1;
// // for(var i = 0; i < arr.length; i++){
// //     var pod = 1;
// //     for(var j=i; j<arr.length; j++){
// //         pod *= arr[j];
// //         if(pod > max){
// //             max = pod;
// //         }
// //     }
// // }
// // console.log(max);

// //no of plat form

// var arv = [0900, 0940, 0950, 1100, 1500, 1800];
// var dep = [0910, 1200, 1120, 1130, 1900, 2000];
// arv.sort((a,b)=>a-b);
// dep.sort((a,b)=>a-b);
// var i=0;
// var j=0;
// var maxTrain = 0;
// var maxPlatform = 0;
// while(i<arv.length){
//     if(arv[i]<=dep[j]){
//         i++;
//         maxTrain++
//     }
//     else{
//         j++;
//         maxTrain--
//     }
//     maxPlatform = Math.max(maxPlatform,maxTrain);
// }
// console.log(maxPlatform)


// //stock span problem
// // var arr = [100,80,60,70,60,75,120];
// // var st = [0];
// // var ans = [1];
// // for (var i = 1; i <arr.length;i++){
// //     while(st.length != 0 && arr[st[st.length - 1]]<=arr[i]){
// //         st.pop();
// //     }
// //     if (st.length == 0){
// //         ans[i] = i+1
// //     }
// //     else{
// //         ans[i] = i-st[st.length-1];
// //     }
// //     st.push(i);
// // }
// // console.log(ans)


// //triplet whose sum == target

// // var arr = [1,4,45,6,10,8];
// // arr.sort((a, b)=>a-b)
// // var start = 0;
// // var target = 13;
// // while (start < arr.length-1) {
// //     var mid = start + 1;
// //     var end = arr.length -1;
// //     while(mid<end) {
// //         var sum = arr[start]+arr[mid]+arr[end];
// //         if(sum == target){
// //             console.log([arr[start],arr[mid],arr[end]])
// //             break;
// //         }
// //         else if(sum>target){
// //             end--;
// //         }
// //         else{
// //             mid++;
// //         }
// //     }
// //     start++;
// // }

// //Smallest Positive missing number

// // var arr = [0,-10,1,3,-20];
// // var obj = {};
// // for(var i=0; i<arr.length; i++){
// //     if(arr[i]>0){
// //         obj[arr[i]] = 1;
// //     }
// // }
// // var k = 1;
// // function minPositive(obj,k){
// //     for(key in obj){
// //         if(obj[k]){
// //             k++;
// //         }
// //         else{
// //             console.log(k);
// //             return
// //         }
// //     }
// //     console.log(k)
// // }
// // minPositive(obj,k)

// //row with max number of 1s

// // var arr = [[0, 1, 1, 1],[0, 0, 1, 1],[1, 1, 1, 1],[0, 0, 0, 0]];
// // var curr = 0;
// // var ans = 0;
// // for(var i=0; i<arr.length; i++){
// //     var one = arr[i].length;
// //     for(var j=0; j<arr.length; j++){
// //         if(arr[i][j]==0){
// //             one -= 1;
// //         }
// //         else{
// //             if(curr<one){
// //                 curr = one;
// //                 ans = i;
// //             }
// //             break;
// //         }
// //     }
// // }
// // console.log(ans)

// //Array Subset of another array

// // var a1 = [11, 1, 13, 21, 3, 7];
// // var a2 = [11, 3, 7, 1];
// // var obj = {};
// // for (var i = 0; i < a1.length; i++){
// //     if(obj[a1[i]]>=1){
// //         obj[a1[i]]++;
// //     }
// //     else {
// //         obj[a1[i]] = 1;
// //     }
// // }
// // var n = 0;
// // for (var j=0; j < a2.length; j++){
// //     if(obj[a2[j]]){
// //         n++;
// //     }
// // }
// // if(n == a2.length){
// //     console.log("Yes");
// // }
// // else {
// //     console.log("No");
// // }

// //Majority Element
// // var a = [3,1,3,3,2];
// // var size = 5;
// // var obj = {};
// // var arr = a;
// // for (var i = 0;i<arr.length; i++){
// //     if(obj[arr[i]]>=1){
// //         obj[arr[i]]++
// //     }
// //     else{
// //         obj[arr[i]] = 1;
// //     }
// // }
// // for(key in obj){
// //     if(obj[key]>Math.floor(size/2)){
// //         console.log(key)
// //         break;
// //     }
// // }

// // var arr = [1,2,3,4,5];
// // var wave = [];
// // var i = 0;
// // var j = 1;
// // while(j < arr.length){
// //     var temp = arr[i];
// //     arr[i] = arr[j];
// //     arr[j] = temp;
// //     i+=2;
// //     j+=2;
// // }
// // console.log(arr.join(" "));

// //Trapping Rain Water

// // var arr = [3,0,0,2,0,4];
// // var left = [];
// //  left[0] = arr[0];
// // for (var i = 1; i < arr.length; i++){
// //     left[i] = Math.max(left[i-1],arr[i])
// // }
// // var right = [];
// // right[arr.length-1] = arr[arr.length-1];
// // for(var j=arr.length-2; j>=0;j--){
// //     right[j] = Math.max(right[j+1],arr[j]);
// // }
// // var sum = 0;
// // for(var k=0;k<arr.length;k++){
// //     sum += Math.min(left[k],right[k])-arr[k];
// // }
// // console.log(sum);

// //find the element whose left are smaller and right are greater
var arr = [];
console.log(arr.)