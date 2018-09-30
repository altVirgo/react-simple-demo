<template>
  <div id="app">
    <div class="hello">
      <span class="title">差值表达式：</span>{{msg}}</div>
    <div>
      <span class="title">修改class,v-bind,v-model</span><input type="checkbox" v-model="class1" id="r1">
      <span :class="{'class1': class1}">
        v-bind:class v-bind:缩写:</span>
    </div>
    <div :id="'list-' + id" v-if='class1'>v-if='class1'</div>
    <hr>
    <div>
      <span class="title">双向绑定 v-model</span>
      <p>双向绑定 v-model：{{ message }}<input v-model="message"></p>
      <p>双向绑定 v-model.lazy：{{ message }}<input v-model.lazy="message"></p>
      <p>v-model修饰符:</p>
      <p>.lazy 在默认情况下， v-model 在 input 事件中同步输入框的值与数据，但你可以添加一个修饰符 lazy ，从而转变为在 change 事件中同步：</p>
      <p>.number 如果想自动将用户的输入值转为 Number 类型（如果原值的转换结果为 NaN 则返回原值），可以添加一个修饰符 number 给 v-model 来处理输入值：</p>
      <p>.trim 如果要自动过滤用户输入的首尾空格，可以添加 trim 修饰符到 v-model 上过滤输入：</p>
    </div>
    <br>
    <hr>
    <div>
      <span class="title">v-on:缩写@ / watch</span>
      <p>{{ messages }}
        <button v-on:click="reverseMessage">反转字符串</button>{{this.watch}}
      </p>
      <p> v-on 通过由点(.)表示的指令后缀来调用修饰符。</p>
      <p>.stop : 阻止事件冒泡</p>
      <p>.prevent : 阻止默认事件</p>
      <p>.capture ：添加事件侦听器时使用事件捕获模式</p>
      <p>.self : 只当事件在该元素本身（而不是子元素）触发时触发回调</p>
      <p>.once ： 事件只能点击一次</p>
      <p>按键修饰符 .enter .tab .delete (捕获 "删除" 和 "退格" 键) .esc .space .up .down .left .right .ctrl .alt .shift .meta</p>
    </div>
    <hr>
    <div>
      <span class="title">过滤器：</span>{{ messages | capitalize }}</div>
    <div>computed: {{reversedMessage}}</div>
    <hr>
    <div>
      <ol>
        <span class="title">v-for:</span>
        <li v-for="site in sites " :key="site.name">
          {{ site.name }}
        </li>
      </ol>
    </div>
    <div>
      <ul>
        <li v-for="(value, key, index) in object" :key="key">
          {{ index }}. {{ key }} : {{ value }}
        </li>
      </ul>
    </div>
    <hr>
    <div>
      <span class="title">复选框</span>
      <p>单个复选框：</p>
      <input type="checkbox" id="checkbox" v-model="checkedNames">
      <label for="checkbox">{{ checked }}</label>

      <p>多个复选框：</p>
      <input type="checkbox" id="runoob" value="Runoob" v-model="checkedNames">
      <label for="runoob">Runoob</label>
      <input type="checkbox" id="google" value="Google" v-model="checkedNames">
      <label for="google">Google</label>
      <input type="checkbox" id="taobao" value="Taobao" v-model="checkedNames">
      <label for="taobao">taobao</label>
      <br>
      <span>选择的值为: {{ checkedNames }}</span>
    </div>
    <hr>
    <br>
    <div>
      <span class="title">组件嵌套</span>
      <button @click="reverseMessage()">parentBtn</button>
      <b>父级作用域：</b>自定义事件$on:{{counter}}
      <b>父级作用域：</b>双向绑定.sync:{{counterSync}}
      <child parentMsg="I'm from parent" v-bind:message="messages" :propA="id" @increment="incrementTotal($event)" :foo.sync="counterSync"></child>
    </div>
    <hr>
    <div>
      <span class="title">自定义指令</span>
      <p> 内置局部：<input type="text" v-focus> </p>
      <p> 引入全局：<input type="text" v-focusGlobal> </p>
     </div>
  </div>
</template>



<script>
import child from "./child.vue";
import focus from "./directives.vue";
export default {
  name: "hello1",
  components: { child: child },
  data() {
    return {
      msg: "欢迎来到菜鸟教程！",
      class1: false,
      id: 2,
      message: "双向绑定",
      messages: "hello",
      watch: "",
      sites: [{ name: "Runoob" }, { name: "Google" }, { name: "Taobao" }],
      object: {
        name: "菜鸟教程",
        url: "http://www.runoob.com",
        slogan: "学的不仅是技术，更是梦想！"
      },
      checked: false,
      checkedNames: [],
      counter: 0,
      counterSync: 23
    };
  },
  methods: {
    reverseMessage() {
      this.messages = this.messages
        .split("")
        .reverse()
        .join("");
    },
    incrementTotal(value) {
      this.counter = value;
    }
  },
  filters: {
    capitalize(value) {
      if (!value) return "";
      value = value.toString();
      return value.toUpperCase();
    }
  },
  watch: {
    messages(newVal, oldVa) {
      this.watch = "messages is change from " + newVal + "to " + oldVa;
    }
  },
  computed: {
    reversedMessage() {
      return this.messages
        .split("")
        .reverse()
        .join("");
    }
  },
  directives: {
    focus: {
      // 指令的定义
      inserted: function(el) {
        console.log("inserted");
        // 聚焦元素
        el.focus();
      },
      update: function(el) {
        console.log("update");
        // 聚焦元素
        el.focus();
      },
      componentUpdated: function(el) {
        console.log("componentUpdated");
        // 聚焦元素
        el.focus();
      },
      bind: function(el) {
        console.log("bind");
        // 聚焦元素
        el.focus();
      }
    },
    focusGlobal:focus
  }
};

// vm.$watch("messages", (newVal, oldVal) => {

// });
</script>
<style>
template {
  text-align: left;
}
.class1 {
  color: red;
}
.title {
  color: red;
  font-weight: bold;
}
</style>