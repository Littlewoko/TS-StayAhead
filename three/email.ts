function isEmailable(val): val is "emailable" {
    return "email" in val;
}