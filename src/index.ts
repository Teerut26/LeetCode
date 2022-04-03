const nums: number[] = [3, 2, 3]
const target: number = 6

const check_by_num = (num_n: number, index: number) => {
    let result: number[] = []
    nums.map((num, idx) => {
        if (idx !== index) {
            if (num_n + num === target) {
                result.push(idx)
            }
        }
    })
    return result
}
let resutl: number[] = []
nums.map((num, idx) => {
    resutl = [...resutl, ...check_by_num(num, idx)]
})
console.log(resutl.sort());

