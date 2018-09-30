<template>
    <div>
        <p>child vue start</p>

        <button @click="incrementHandler()">$emit("increment")</button>

        prop 进行“双向绑定”
        <p>
            <span class="title">使用 props 传递数据</span>在父级为值：{{parentMsg}}</p>
        <p>
            <span class="title">动态props</span>在父级为v-bind变量：{{message}}</p>
        <p>
            <span class="title">Prop 验证：</span>传入值校验，不合法会导致控制台报错，但不会阻塞后续代码执行<br> propA:{{propA}}
            <br> propB:{{propB}}
            <br> propC:{{propC}}
            <br> propD:{{propD}}
            <br> propE:{{propE}}
            <br> propF:{{propF}}
            <br>
            <b>type 可以是下面原生构造器： String Number Boolean Function Object Array</b>
        </p>
        <p>child vue end</p>
    </div>
</template>
<script>
export default {
  name: "child",
  data() {
    return {
      counter: 0
    };
  },
  methods: {
    incrementHandler() {
      this.counter += 1;
      this.foo += 1;
      this.$emit("increment", this.counter);
      this.$emit("update:foo", this.foo);// 双向绑定
    }
  },
  props: {
    foo: null,
    parentMsg: null,
    message: null,
    // 基础类型检测 （`null` 意思是任何类型都可以）
    propA: Number,
    // 多种类型
    propB: [String, Number],
    // 必传且是字符串
    propC: {
      type: String,
      default: "String",
      required: false // 如果required为true， propC为接收到任何值，就算设置default值也会报错
    },
    // 数字，有默认值
    propD: {
      type: Number,
      default: 100
    },
    // 数组／对象的默认值应当由一个工厂函数返回
    propE: {
      type: Object,
      default() {
        return { message: "hello" };
      }
    },
    // 自定义验证函数
    propF: {
      validator(value) {
        return value > 10;
      }
    }
  }
};
</script>
