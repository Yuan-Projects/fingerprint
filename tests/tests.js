QUnit.module("Hardware");

QUnit.test("CPU", function(assert) {
  assert.ok(YuanFP.getCPUCores(), 'Able to get the number of logical processors available to run threads on the user\'s computer');
  assert.ok(YuanFP.getCPUClass(), 'Able to get CPU class of the user\'s operating system');
});

QUnit.test("Memory", function(assert) {
  assert.ok(YuanFP.getMemory(), 'Able to get device memory in gigabytes');
});

QUnit.test("Graphics", function(assert) {
  assert.ok(YuanFP.getGPU().vendor, 'Able to get GPU vendor');
  assert.ok(YuanFP.getGPU().renderer, 'Able to get GPU renderer');
});