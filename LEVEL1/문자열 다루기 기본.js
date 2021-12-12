function solution(s) {
    let answer = false;

    if (s.length === 4 || s.length === 6) {
        if (/\D/.test(s)) {
            answer = false;
        } else {
            answer = true;
        }
    }
    return answer;
}