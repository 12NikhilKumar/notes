// //find longest prefix
// // var arr = ["geeksforgeeks","geeks","geek","geezer"];
// // var prefix = arr[0];
// // for(var i = 1; i < arr.length; i++){
// //     var str = "";
// //     for(var j = 0; j < arr[i].length; j++){
// //         if(prefix[j] == arr[i][j]){
// //             str += arr[i][j]
// //         }
// //     }
// //     prefix = str;
// // }
// // console.log(prefix)

// //min distance between two string
// // var arr = ["the", "quick", "brown", "fox","quick"];
// // var s1 = "the";
// // var s2 = "fox";
// // function fun(s1,s2,arr){
// //     for(var i=0;i<arr.length;i++){
// //         var l1,l2;
// //         if(arr[i]==s1){
// //             l1 = i;
// //         }
// //         if(arr[i]==s2 && i>l1){
// //             l2 = i;
// //         }
// //     }
// //     return l2-l1
// // }
// // console.log(fun(s1,s2,arr))

// //Isomorphic Strings

// // var str1 = "aba";
// // var str2 = "xzx";
// // function fun(s1,s2,i,j) {
// //     while (i < j) {
// //         if(s1[i] == s1[j] && s2[i] == s2[j]){
// //             i++;
// //         }
// //         else if(s1[i] != s1[j] && s2[i] != s2[j]){
// //             j--;
// //         }
// //         else{
// //             return 0
// //         }
// //     }
// //     return 1
// // }
// // console.log(fun(str1,str2,0,2))

// //Check if two strings are k-anagrams or not

// // var k = 2;
// // var str1 = "fodr";
// // var str2 = "gork";
// // var obj = {};
// // var cnt = 0;
// // for (var i = 0; i < str1.length; i++){
// //     if(obj[str1[i]]>=1){
// //         obj[str1[i]]++
// //     }
// //     else{
// //         obj[str1[i]]=1;
// //     }
// // }
// // for(var j = 0; j < str2.length; j++){
// //     if(obj[str2[j]]){
// //         obj[str2[j]]--
// //         cnt++
// //     }
// // }
// // if(str2.length-cnt >= k){
// //     console.log("valid")
// // }

// //Minimum Deletions
// // var str = "geeksforgeeks";
// // var str2 = "";
// // for(var t=str.length-1; t>=0; t--){
// //     str2 += str[t];
// // }
// // var obj = {};
// // for(let i=0; i<str.length; i++){
// //     let sub = "";
// //     for(let j=i; j<str.length; j++){
// //         sub += str[j];
// //         if(obj[sub]>=1){
// //             obj[sub]++;
// //         }
// //         else{
// //             obj[sub] = 1;
// //         }
// //     }
// // }
// // for(let i=0; i<str.length; i++){
// //     let sub = "";
// //     for(let j=i; j<str.length; j++){
// //         sub += str2[j];
// //         if(obj[sub]){
// //             obj[sub]--
// //         }
// //     }
// // }
// // console.log(obj);


// // valid ip address
// // var str = '1...1';
// // var arr = str.split('.');
// // function fun(arr){
// //     if(arr.length == 4){
// //         for(var i=0; i<arr.length; i++){
// //             if(arr[i]<=0 || arr[i]>255){
// //                 return 0
// //             }
// //         }
// //         return 1;
// //     }
// //     return 0
// // }
// // console.log(arr)

// //Minimum times A has to be repeated such that B is a substring of it 
// // var str = "ab";
// // var res = "cab";
// // var obj = {};
// // for (var i=0; i<str.length; i++){
// //     if(obj[str[i]]>=1){
// //         obj[str[i]]++
// //     }
// //     else{
// //         obj[str[i]] = 1
// //     }
// // }
// // for(var j=0;j<res.length;j++){
// //     if(obj[res[j]]){
// //         obj[res[j]]++
// //     }
// //     else{
// //         return -1;
// //     }
// // }
// // var max = 0;
// // for(key in obj){
// //     if(max > obj[key]){
// //         max = obj[key]
// //     }
// // }
// // return max;

// //Find the N-th character
// // var s = "101";
// // var R = 2;
// // var N = 3;
// // while (R!=0){
// //     var res = "";
// //     for (var i = 0; i<s.length;i++){
// //         if(s[i]=='1'){
// //             res += "10"
// //         }
// //         else if(s[i]=='0'){
// //             res += "01"
// //         }
// //     }
// //     s = res
// //     R--;
// // }
// // console.log(res)

// //Longest comon sufix and prefix is
// // var s = "abab";
// // var i = 0;
// // var j = Math.floor(s.length/2)
// // while (i < j){
// //     if(s[i]==s[j]){
// //         i++;
// //         j++;
// //     }
// //     else{
// //         j = j - i + 1;
// //         i = 0;
// //     }
// // }

// //uniqueChar of k longest
// // var str = "aabacbebebe";
// // var k = 3;
// // var obj = {};
// // var i = 0;
// // var j = 0;
// // var maxLength = 0;
// // while (j < str.length){
// //     obj[str[j]] = obj[str[j]]?obj[str[j]]+1:1
// //     var objLen = Object.keys(obj).length;
// //     if (objLen < k){
// //         j++;
// //     }
// //     else if(objLen == k){
// //         maxLength = Math.max(maxLength,j-i+1);
// //         j++;
// //     }
// //     else{
// //         while (Object.keys(obj).length > k){
// //             obj[str[i]] = obj[str[i]]-1;
// //             if (obj[str[i]]==0){
// //                 delete obj[str[i]];
// //             }
// //             i++;
// //         }
// //         j++
// //     }
// // }    
// // console.log(maxLength)

// // //Smallest window in a string containing all the characters of another string

// // var s = "timetopractice";
// // var p = "toc";
// // var obj = {};
// // for(let i = 0; i <p.length;i++){
// //     if(obj[p[i]]>=1){
// //         obj[p[i]]++
// //     }
// //     else{
// //         obj[p[i]] = 1;
// //     }
// // }
// // var i = 0;
// // var j = 0;
// // var n = 0;
// // var minLength = 9999;
// // while(j < s.length){
// //     if(obj[s[j]]>=0 || obj[s[j]]<0 ){
// //         obj[s[j]]--;
// //         if(obj[s[j]]==0){
// //             n++;
// //         }
// //     }
// //     if(n == p.length){
// //         n = 0;
// //         while(n != p.length){
// //             if(obj[s[i]]==0){
// //                 n++;
// //             }
// //         }
// //     }
// //     j++;
// // }
// // console.log(n)

// //find equal no of zeros one and 2;
// // var str = "11100022";
// // var arr = [];
// // for(var i = 0;i<str.length; i++){
// //     var subStr = "";
// //     for(var j=i;j<str.length; j++){
// //         subStr += str[j];
// //         if(subStr.length >= 3){
// //             arr.push(subStr);
// //         }
// //     }
// // }
// // var n = 0;
// // for(let i=0;i<arr.length;i++){
// //     var zero = 0;
// //     var one = 0;
// //     var two = 0;
// //     for(let j=0;j<arr[i].length;j++){
// //         if(arr[i][j] == "0"){
// //             zero++;
// //         }
// //         else if(arr[i][j]=="1"){
// //             one++;
// //         }
// //         else if(arr[i][j]=="2"){
// //             two++;
// //         }
// //     }
// //     if(one == zero && zero == two){
// //         n++;
// //     }
// // }
// // console.log(n)

// // var str = "0102010";
// // var obj = {};
// // var i = 0;
// // var j = 0;
// // var n = 0;
// // while(j<n){
// //     if(obj[str[j]]>=1){
// //         obj[str[j]]++
// //     }
// //     else{
// //         obj[str[j]] = 1;
// //     }
// //     if(Object.keys(obj).length == 3){
// //         if(obj["0"]==obj["1"] && obj["1"]==obj["2"]){
// //             n++;
// //             while(Object.keys(obj).length!=0){
// //                 obj[str[i]]--;
// //                 if(obj[str[i]]==0){
// //                     delete obj[str[i]];
// //                 }
// //                 i++;
// //             }
// //         }
// //     }
// // }
// // console.log(n);

// // var s = "aba";
// // var obj = {};
// // k = 2;
// // var n = 0;
// // for (var i = 0; i <s.length;i++){
// //     var sub = "";
// //     for (var j = i; j <s.length;j++){
// //         sub+=s[j];
// //         if(sub.length>=k){
// //           for(var k=0;k<sub.length;k++){
// //               obj[sub[k]]=obj[sub[k]]?obj[sub[k]]+1:1
// //               if(Object.keys(obj).length == k){
// //                   console.log(obj)
// //                   n++;
// //                   obj = {};
// //               }
// //           }  
// //         }
// //     }
// // }
// // console.log(n)

// // function smallest(string,k){
// //     var size = string.length;
// //     var curr = 0
// //     for(var i=0;i<size;i++){
// //         var obj = {}
// //         var count = 0

// //         for(var j=i;j<size;j++){
// //             if (obj[string[j]]==undefined) {
// //                 obj[string[j]] = 1
// //                 count++
// //             }else{
// //                 obj[string[j]] += 1
// //             }

// //             if (count==k) {
// //                 curr++
// //             }else if (count>k){
// //                 break
// //             }
// //         }
// //     }
// //     return curr
// // }
// //subsequence 

// var str = "gfg";
// var i = 0;
// function sub(str,ans){
//     if(str.length == 0){
//         console.log(ans)
//     }
//     else{
//         sub(str.substring(1),ans);
//         sub(str.substring(1),ans+str[0])
//     }

// }
// // sub(str,"")
// var s = "A man, a plan, a canal: Panama";
// var res = "";
// for (var i = 0; i <s.length; i++){
//     if(s[i]!=="" || s[i]!==":" || s[i]!==","){
//         res += s[i];
//     }
// }
// console.log(res.trim(':'));

//group anagram in same aaray
// var str = ["eat","tea","tan","ate","nat","bat"];
// var obj = {};
// for(var i=0;i<str.length;i++){
//     var arr = str[i].split('').sort().join('')
//     if(obj[arr]){
//         obj[arr].push(i)
//     }
//     else{
//         obj[arr] = [i]
//     }
// }
// console.log(obj)

