import NullProvider from "@cdktf/provider-null";
import { Construct } from "constructs";
import { TerraformStack } from "cdktf";

class _MyExampleStack extends TerraformStack {
  constructor(scope: Construct, name: string) {
    super(scope, name);
    const nullA = new NullProvider.resource.Resource(this, "NullA", {});
    new NullProvider.resource.Resource(this, "NullB", {
      dependsOn: [nullA],
    });
  }
}
