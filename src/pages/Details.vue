<template>
  <div>
    <div class="page-header page-header-small">
      <parallax
        class="page-header-image"
        style="background-image: url('img/bg6.jpg')"
      >
      </parallax>
      <div class="content-center">
        <div class="container">
          <h1 class="title">Traffic analyzer</h1>
          <div class="text-center">
            <a href="#pablo" class="btn btn-primary btn-icon btn-round">
              <i class="fab fa-facebook-square"></i>
            </a>
            <a href="#pablo" class="btn btn-primary btn-icon btn-round">
              <i class="fab fa-twitter"></i>
            </a>
            <a href="#pablo" class="btn btn-primary btn-icon btn-round">
              <i class="fab fa-google-plus"></i>
            </a>
          </div>
        </div>
      </div>
    </div>

    <div class="details contanier-fluid">
      <div class="row m-0 mt-5">
        <div class="col-md-6 offset-md-3 bg-light">
          <h1>My experience with TensorFlow Quantum</h1>
          <p>November 27, 2010</p>
          <hr />
          <p>
            Quantum mechanics was once a very controversial theory. Early
            detractors such as Albert Einstein famously said of quantum
            mechanics that “God does not play dice” (referring to the
            probabilistic nature of quantum measurements), to which Niels Bohr
            replied, “Einstein, stop telling God what to do”. However, all
            agreed that, to quote John Wheeler “If you are not completely
            confused by quantum mechanics, you do not understand it”. As our
            understanding of quantum mechanics has grown, not only has it led to
            numerous important physical discoveries but it also resulted in the
            field of quantum computing. Quantum computing is a different
            paradigm of computing from classical computing. It relies on and
            exploits the principles of quantum mechanics to achieve speedups (in
            some cases superpolynomial) over classical computers.
          </p>

          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa eos
            quisquam suscipit unde vero animi optio modi, quam facilis
            exercitationem earum blanditiis. Necessitatibus, aperiam error
            ratione maiores sint nesciunt minima.
          </p>

          <p>
            As our understanding of quantum mechanics has grown, not only has it
            led to numerous important physical discoveries but it also resulted
            in the field of quantum computing. Quantum computing is a different
            paradigm of computing from classical computing. It relies on and
            exploits the principles of quantum mechanics to achieve speedups (in
            some cases superpolynomial) over classical computers.
          </p>
          <p>
            A QVC can be visualized below (from the TFQ white paper). The
            diagram is read from left to right, with the qubits being
            represented by the horizontal lines. In a QVC there are three
            important and distinct parts: the encoder circuit, the variational
            circuit and the measurement operators. The encoder circuit either
            takes naturally quantum data (i.e. a nonparametrized quantum
            circuit) or converts classical data into quantum data. This circuit
            is connected to the variational circuit which is defined by its
            learnable parameters. The parametrized part of the circuit is the
            part that is updated during the learning process. The last part of
            the QVC is the measurement operators. In order to extract
            information from the QVC some sort of quantum measurement (such as a
            Pauli X, Y, or Z basis measurements) must be applied. With the
            information extracted from these measurements a loss function (and
            gradients) can be calculated on a classical computer and the
            parameters can be updated. These gradients can be optimized with the
            same optimizers as traditional neural networks such as Adam or
            RMSProp. QVC’s can also be combined with traditional neural networks
            (as is shown in the diagram) as the quantum circuit is
            differentiable and thus gradients can be backpropagated through.
          </p>
          <img
            src="https://1.bp.blogspot.com/-02hZrWRxcdo/X769TDSFbyI/AAAAAAAADxg/ihPZGWEa67oACWzlDEkhbuPd2cS_rlI1wCLcBGAsYHQ/s0/pasted%2Bimage%2B0%2B%252821%2529.png"
            alt=""
            class="w-100"
          />
          <h6 class="text-center">
            <i
              >Differentiable and thus gradients can be backpropagated
              through.</i
            >
          </h6>

          <h4>Suggested use of TFQ</h4>
          <p>
            TFQ can be an incredible tool for anyone interested in QML research
            no matter your background. All too common in scientific communities
            is a ‘publish or perish’ mentality which can stifle innovative work
            and is prohibitive to intellectual risk taking, especially for
            experiments that require significant implementation efforts. Not
            only can TFQ help speed up any experiments you may have, but it also
            allows for easy implementation of ideas that would otherwise never
            get tested. Implementation is a common hindrance to new and
            interesting ideas, and far too many projects never progress out of
            the idea stage due to difficulties in transitioning the idea to
            reality, something TFQ makes easy.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { Button, FormGroupInput } from "@/components";
export default {
  metaInfo: {
    titleTemplate: "Blog details | %s",
    htmlAttrs: {
      lang: "en",
      amp: true,
    },
    meta: [
      { name: "description", content: "Trafficanalyzer Blog Home page" },
      { name: "keywords", content: "Hello,ok" },
    ],
  },
  name: "landing",
  bodyClass: "landing-page",
  components: {
    [Button.name]: Button,
    [FormGroupInput.name]: FormGroupInput,
  },
  data() {
    return {
      form: {
        firstName: "",
        email: "",
        message: "",
      },
    };
  },
};
</script>
<style></style>
