function appCity ({city,state}) {
    $("#form-city #content").append(`
        <li>
            <span>${city}</span>
            <span>${state}</span> 
        </li>
    `)
}

