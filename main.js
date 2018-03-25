const React = {
    createElement:function (type, props,children) {
       const main = document.createElement(type);
        if (typeof props == "object"){
            for (var key in props){
                if (key == "style"){
                    for (var key1 in  props.style){
                        main.style[key1]=props.style[key1];
                    }
                }else {
                    main[key] = props[key];
                }
            }
        }

        if(Array.isArray(children)){
            children.forEach(function (node) {
                if(node.nodeType){
                    main.appendChild(node);}
                else if(typeof node==="string"){
                   main.appendChild(document.createTextNode(node));}
            });
        }else if(typeof children === "string") {
            main.textContent= children;
        }
        console.log(main);
        return main;
    },
    render:function (child, root) {
    root.append(child);
    }
};
const app =
    React.createElement('div', { style: { backgroundColor: 'red'},onclick: ()=> console.log("hello")}, [
        React.createElement('span', undefined, 'Hello world'),
        React.createElement('br'),
        'This is just a text node',
        React.createElement('div', { textContent: 'Text content' }),
    ]);

React.render(app,document.getElementById('root'));