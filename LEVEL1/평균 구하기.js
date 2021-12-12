function solution(arr) {
    const answer = arr.reduce((prev, curr) => prev + curr, 0) / arr.length;;
    return answer;
}