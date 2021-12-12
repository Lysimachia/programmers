function solution(lottos, win_nums) {
    let rank = new Map([
        [6, 1],
        [5, 2],
        [4, 3],
        [3, 4],
        [2, 5],
    ]);
    const bottom = lottos.filter(num => win_nums.includes(num)).length;
    const top = bottom + lottos.filter(num => num == 0).length;
    const top_rank = rank.get(top) || 6;
    const bottom_rank = rank.get(bottom) || 6;
    return [top_rank, bottom_rank];
}