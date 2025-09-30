type Status = 'pending' | 'in progress' | 'delivered';

class Order {
    private tableNumber: number; 
    private orderTaker: string;
    private readonly drinks: string[] = [];
    private readonly foodItems: string[] = [];
    private orderTakenTime: Date;
    private orderDeliveredTime: Date;
    private status: Status;

    Order(
        tableNumber: number, 
        orderTaker: string
    ) {
        this.tableNumber = tableNumber;
        this.orderTaker = orderTaker;
        this.status = 'pending';
    }

    setTableNumber(tableNumber: number) {
        this.tableNumber = tableNumber;
    }

    startOrder(drinks: string[], foodItems: string[]) {
        this.drinks.push(...drinks);
        this.foodItems.push(...foodItems);

        this.orderTakenTime = new Date();

        this.status = 'in progress';
    }

    deliverOrder() {
        if (!this.orderTakenTime) {
            throw "Order has not started";
        }

        this.orderDeliveredTime = new Date();

        this.status = 'delivered';
    }

    getOrderDurationMinutes() {
        if (!this.orderTakenTime || !this.orderDeliveredTime) {
            throw "Order has not been delivered";
        }
        const msDiff = this.orderDeliveredTime.getTime() - this.orderTakenTime.getTime();
        return msDiff / (1000 * 60);
    }
}