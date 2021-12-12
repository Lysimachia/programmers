function solution(numbers) {
    let answer = '';
    answer = numbers.sort((a, b) => {
        if (`${a}${b}` > `${b}${a}`) {
            return -1;
        }
    });
    if (numbers[0] == 0) {
        return '0';
    } else {
        return answer.join("");
    }
}