function solution(answers) {
    const students = [];
    const scores = [0, 0, 0];
    const lank = [];

    students.push("".padEnd(answers.length, '12345').split(''));
    students.push("".padEnd(answers.length, '21232425').split(''));
    students.push("".padEnd(answers.length, '3311224455').split(''));

    for (let j = 0; j < answers.length; j++) {
        if (students[0][j] == answers[j]) {
            scores[0]++;
        }
        if (students[1][j] == answers[j]) {
            scores[1]++;
        }
        if (students[2][j] == answers[j]) {
            scores[2]++;
        }
    }
    const max_score = Math.max(...scores);

    scores.forEach((el, idx) => {
        if (el == max_score) {
            lank.push(idx + 1);
        }
    })

    return lank;
}