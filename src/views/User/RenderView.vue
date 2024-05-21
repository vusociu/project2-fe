<template>
  <b-container fluid class="vh-100">
    <b-row class="h-100">
      <b-col>
        <div class="textarea-wrapper">
          <div class="d-flex justify-content-between">
            <b-button variant="primary" @click="render" class="w-25 mb-3 mt-2">Render</b-button>
            <b-button variant="primary" @click="convertPdf" class="w-25 mb-3 mt-2">Download File</b-button>
          </div>
          <b-form-textarea class="flex-grow" placeholder="Nhập nội dung render" v-model="textareaContent"></b-form-textarea>
        </div>
      </b-col>
      <b-col>
        <div class="textarea-wrapper">
          <h3>Preview</h3>
          <div ref="htmlContent" class="mt-3 border flex-grow p-2" id="katex-render"></div>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import katex from 'katex';
import html2pdf from 'html2pdf.js';
export default {
  data() {
    return {
      textareaContent: ''
    };
  },
  methods: {
    render() {
      // const options = {
      //   packages: ['lingmacros', 'tree-dvips'],
      //   ignoreErrors: true // Set to false to handle errors
      // };
      // latex.dom(this.$refs.htmlContent).render(this.textareaContent, options);

      const targetElement = document.getElementById('katex-render');
      katex.render(this.textareaContent, targetElement, {
        throwOnError: false
      });
    },
    convertPdf() {
      const element = this.$refs.htmlContent;
      const opt = {
        margin:       1,
        filename:     'converted.pdf',
        image:        { type: 'jpeg', quality: 0.98 },
        html2canvas:  { scale: 2 },
        jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
      };
      html2pdf().from(element).set(opt).save();
    }
  }
};
</script>

<style scoped>
.textarea-wrapper {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.flex-grow {
  flex: 1; /* Make the textarea grow to fill the available space */
}
</style>
