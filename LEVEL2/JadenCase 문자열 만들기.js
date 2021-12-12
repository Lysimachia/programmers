function solution(s) {
    const regex = /\b[a-z]/g;
    let answer = s.toLowerCase();
    return answer.replace(regex, match => match.toUpperCase());
}