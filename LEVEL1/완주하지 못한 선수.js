function solution(participant, completion) {
    let checkList = new Map();
    let result = '';
    participant.forEach(name => {
        if (checkList.has(name)) {
            checkList.set(name, checkList.get(name) + 1);
        } else {
            checkList.set(name, 1);
        }
    })

    completion.forEach(name => {
        if (checkList.has(name)) {
            checkList.set(name, checkList.get(name) - 1);
        }
    })

    checkList.forEach((value, key) => {
        if (value !== 0) {
            result = key;
        }
    })
    return result;
}