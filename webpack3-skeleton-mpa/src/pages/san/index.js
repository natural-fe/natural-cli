import  san from 'san'

const MyApp = san.defineComponent({
  template: `
                <div>
                    <input type="text" value="{=name=}">
                    <p>Hello {{name}}!</p>
                </div>
            `
});

let myApp = new MyApp({
  data: {
    name: 'San'
  }
});
myApp.attach(document.body);
