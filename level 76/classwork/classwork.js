def number(bus_stops):
    total = 0
    for on, off in bus_stops:
        total += on - off
    return total