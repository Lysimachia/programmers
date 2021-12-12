function solution(s) {
    const length = s.length;
    const centerIdx = Math.floor(length / 2);
    if (length % 2 === 0) {
        return s.slice(centerIdx - 1, centerIdx + 1);
    } else {
        return s.charAt(centerIdx);
    }
}