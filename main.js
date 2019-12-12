let className = [
    { index: 1, name: '张三' },
    { index: 2, name: '李四' },
    { index: 3, name: '王五' },
    { index: 4, name: '刘六' },
    { index: 5, name: '林七' },
    { index: 6, name: '石八' },
    { index: 7, name: '吴九' },
    { index: 8, name: '邓十' },
    { index: 8, name: '徐十一' },
    { index: 8, name: '罗十二' },
    { index: 8, name: '彭十三' },
    { index: 8, name: '付十四' },
    { index: 8, name: '夏十五' },
    { index: 8, name: '宋十六' }
]

let app = new Vue({
    el: '#app',
    data: {
        cl: 'cl2',
        count: 0,
        target: '_blank',
        name: '',
        classList: className,
        checkedList: [],
        absencesedList: [],
        ifshow: false,
        kaoqinList: '',
        queqinList: '',
        kaoqinListShow: false,
        queqinListShow: false,
        currentIndex: 0,
        ifStart: false
    },
    methods: {
        checkList: function () {
            this.ifshow = true;
            this.kaoqinListShow = true;
            this.queqinListShow = false;
            let str = this.checkedList.join(',');
            if (str.length == 0) {
                this.kaoqinList = "无人考勤"
            } else {
                this.kaoqinList = str;
            }
        },
        absencesList: function () {
            this.ifshow = true;
            this.queqinListShow = true;
            this.kaoqinListShow = false;
            let str = this.absencesedList.join(',');
            if (str.length == 0) {
                this.queqinList = '无人缺勤'
            } else {
                this.queqinList = str;
            }
        },
        check: function () {
            if (this.ifStart) {
                if (this.currentIndex <= this.clNumber - 1) {
                    this.checkedList.push(this.name);
                    this.count++;
                    if (this.currentIndex == this.clNumber - 1) {
                        this.name = '点名完毕！';
                    } else {
                        this.name = this.classList[this.currentIndex + 1].name;
                    }
                } else {
                    this.name = '点名完毕！';
                }
                this.currentIndex++;

                let str = this.checkedList.join(',');
                if (str.length == 0) {
                    this.kaoqinList = "无人考勤"
                } else {
                    this.kaoqinList = str;
                }
            }
        },
        absences: function () {
            if (this.ifStart) {
                if (this.currentIndex <= this.clNumber - 1) {
                    this.absencesedList.push(this.name);
                    if (this.currentIndex == this.clNumber - 1) {
                        this.name = '点名完毕！'
                    } else {
                        this.name = this.classList[this.currentIndex + 1].name;
                    }
                } else {
                    this.name = '点名完毕！'
                }
                this.currentIndex++;

                let str = this.absencesedList.join(',');
                if (str.length == 0) {
                    this.queqinList = '无人缺勤'
                } else {
                    this.queqinList = str;
                }
            }
        },
        begin: function () {
            this.ifStart = true;
            this.currentIndex = 0;
            this.checkedList = [];
            this.absencesedList = [];
            this.count = 0;
            let firstName = this.classList[0].name;
            this.name = firstName;
        }
    },
    computed: {
        clNumber: function () {
            return this.classList.length;
        }
    }
})