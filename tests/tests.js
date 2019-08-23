QUnit.module("Hardware");

QUnit.test("CPU", function(assert) {
  assert.ok(YuanFP.getHardwareConcurrency(), 'Able to get the number of logical processors available to run threads on the user\'s computer');
  assert.ok(YuanFP.getCPUClass(), 'Able to get CPU class of the user\'s operating system');
});