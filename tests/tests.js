QUnit.module("Hardware");

QUnit.test("CPU", function(assert) {
  var cores = YuanFP.getCPUCores();
  var cpuClass = YuanFP.getCPUClass();
  assert.ok(cores, 'Able to get the number of logical processors available to run threads on the user\'s computer: ' + cores);
  assert.ok(cpuClass, 'Able to get CPU class of the user\'s operating system: ' + cpuClass);
});

QUnit.test("Memory", function(assert) {
  var memory = YuanFP.getMemory();
  assert.ok(memory, 'Able to get device memory in gigabytes: ' + memory);
});

QUnit.test("Graphics", function(assert) {
  var renderer = YuanFP.getGPU().renderer;
  var vendor = YuanFP.getGPU().vendor;
  assert.ok(vendor, 'Able to get GPU vendor: ' + vendor);
  assert.ok(renderer, 'Able to get GPU renderer: ' + renderer);
});

QUnit.test("Energy", function(assert) {
  var done = assert.async();
  YuanFP.getBattery().getStatus(function(status, error) {
    if (error) {
      assert.notOk(true, "Failed to get battery info");
      done();
      return;
    }
    assert.ok(status.level, "Able to get battery level: " + status.level);
    done();
  });
});

QUnit.test("Devices", function(assert) {
  var done = assert.async();
  YuanFP.getDevices().then(function(devices) {
    assert.ok(devices.length, "Able to get media input and output devices: " + devices.length);
    done();
  }).catch(function(err) {
    assert.ok(false, 'Able to get media devices, error message: ' + err.message);
    done();
  });
});

QUnit.module("OperatingSystem");

QUnit.test("Platform", function(assert) {
  var platform = YuanFP.getPlatform();
  assert.ok(platform.name, "Able to get the platform of the browser: " + platform.name);
  assert.ok(platform.version, "Able to get the platform version: " + platform.version);
});