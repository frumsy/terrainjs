function range(start, end, step = 1) {
    const len = Math.floor((end - start) / step) + 1
    return Array(len).fill().map((_, idx) => start + (idx * step))
  }

function Rand(min, max){
    return Math.floor((Math.random() * max) + min);
}