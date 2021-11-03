function rectangle() { //========================================
    // Get elemetns
    const   btn = document.getElementById("Rectangle_btn"),
    a = document.getElementById("base_r"),
    b = document.getElementById("height_r"),
    A = document.getElementById("Rectangle_area"),
    P = document.getElementById("Rectangle_perimeter");

    // Clear option
    if (btn.textContent == "Clear") {
    a.value = null;
    b.value = null;
    btn.textContent = "Calculate";
    A.innerHTML = null;
    P.innerHTML = null;
    return;
    };

    // Operation
    area = a.value * b.value
    perimeter = a.value*2 + b.value*2

    // Print results
    A.innerHTML = area.toFixed(2);
    P.innerHTML = perimeter.toFixed(2);
    btn.textContent = "Clear"
    
}; //===========================================================

function triangle() { //========================================
    // Get elements
    const   btn = document.getElementById("triangle_btn"),
            a = document.getElementById("side_b"),
            h = document.getElementById("height_t"),
            A = document.getElementById("triangle_area");
    
    // Clear option
    if (btn.textContent == "Clear") {
        a.value = null;
        h.value = null;
        btn.textContent = "Calculate";
        A.innerHTML = null;
        return;
    };
    
    // Operation
    area = (Number(a.value) * Number(h.value)) / 2;
    
    // Print results
    A.innerHTML = area.toFixed(2);
    btn.textContent = "Clear"
}; //===========================================================

function circle() { //========================================  
    // Get elemetns
    const   btn = document.getElementById("circle_btn"),
            a = document.getElementById("diameter"),
            A = document.getElementById("circle_area"),
            P = document.getElementById("circle_perimeter");
    
    // Clear option
    if (btn.textContent == "Clear") {
        a.value = null;
        btn.textContent = "Calculate";
        A.innerHTML = null;
        P.innerHTML = null;
        return;
    };
    
    // Operation
    area = Math.PI * (a.value/2)**2;
    perimeter = Math.PI * a.value;

    // Print results
    A.innerHTML = area.toFixed(2);
    P.innerHTML = perimeter.toFixed(2);
    btn.textContent = "Clear"
}; //===========================================================

function trapeze() { //========================================  
    // Get elements
    const   btn = document.getElementById("trapeze_btn"),
            a = document.getElementById("top_tp"),
            b = document.getElementById("base_tp"),
            h = document.getElementById("height_tp"),
            A = document.getElementById("trapeze_area"),
            P = document.getElementById("trapeze_perimeter");
    
    // Clear option
    if (btn.textContent == "Clear") {
        a.value = null;
        b.value = null;
        h.value = null;
        btn.textContent = "Calculate";
        A.innerHTML = null;
        return;
    };
    
    // Operation
    area = ((Number(a.value) + Number(b.value)) * Number(h.value)) / 2
    
    // Print results
    A.innerHTML = area.toFixed(2);
    btn.textContent = "Clear"
}; //===========================================================