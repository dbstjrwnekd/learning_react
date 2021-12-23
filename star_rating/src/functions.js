export function timesTwo(num){
    return num * 2;
}

export function order(items){
    const total = items.reduce(
        (price, item) => price + item.price,
        0
    );
    return {
        orderItems: items,
        total
    };
}