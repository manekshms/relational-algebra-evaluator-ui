// @ts-ignore
import PluginBase from "terminal-in-react/lib/js/components/Plugin";

export class RaeTerminalPlugin extends PluginBase {
  static displayName = "RaeTernimalPlugin";
  static version = "0.0.1";

  constructor(api: any, config: any) {
    super(api, config);
    console.log(api);
  }

  show = (args: any) => {
    if (args.length === 1) {
      // @ts-ignore
      return (
        <h3 style={{ fontWeight: "bold", fontSize: "18px" }}>
          Welcome to Relational Algebra Evaluator
        </h3>
      );
    } else {
      // @ts-ignore
      this.api.runCommand(`--${args.join(" ")}`);
    }
  };

  loading = () => {
    // @ts-ignore
    this.api.printLine("🚀 Loading..");
  };

  removeLine = () => {
    // @ts-ignore
    this.api.removeLine(-1);
  };

  commands = {
    show: this.show,
    loading: this.loading,
    removeLine: this.removeLine,
  };

  getPublicMethods() {
    return {
      loading: this.loading,
      removeLine: this.removeLine,
    };
  }

  descriptions = {
    show: false,
    echo: false,
  };
}
