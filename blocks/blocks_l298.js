Blockly.Blocks['motordrive_l298_begin1'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("Motor Driver L298 Setup :");
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("Motor A :")
        this.appendValueInput("IN1")
            .setCheck("Number")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("IN1");
        this.appendValueInput("IN2")
            .setCheck("Number")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("IN2");
            this.appendDummyInput()
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("Motor B :")
        this.appendValueInput("IN3")
            .setCheck("Number")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("IN3");
        this.appendValueInput("IN4")
            .setCheck("Number")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("IN4");
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(330);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['motordrive_l298_begin2'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("Motor Driver L298 Setup :");
        this.appendValueInput("ENA")
            .setCheck("Number")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("Motor A :")
            .appendField(new Blockly.FieldDropdown([["pwm0", "0"], ["pwm1", "1"], ["pwm2", "2"], ["pwm3", "3"], ["pwm4", "4"], ["pwm5", "5"], ["pwm6", "6"]]), "CHANNEL_A")
            .appendField(": Enable A");
        this.appendValueInput("IN1")
            .setCheck("Number")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("IN1");
        this.appendValueInput("IN2")
            .setCheck("Number")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("IN2");
        this.appendValueInput("ENB")
            .setCheck("Number")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("Motor B :")
            .appendField(new Blockly.FieldDropdown([["pwm0", "0"], ["pwm1", "1"], ["pwm2", "2"], ["pwm3", "3"], ["pwm4", "4"], ["pwm5", "5"], ["pwm6", "6"]]), "CHANNEL_B")
            .appendField(": Enable B");
        this.appendValueInput("IN3")
            .setCheck("Number")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("IN3");
        this.appendValueInput("IN4")
            .setCheck("Number")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("IN4");
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(330);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['motordrive_l298_forward'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("Motor Driver L298 : Motor")
            .appendField(new Blockly.FieldDropdown([["A-B", "0"], ["A", "1"], ["B", "2"]]), "MOTOR")
            .appendField(" Move forward");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(330);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['motordrive_l298_backward'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("Motor Driver L298 : Motor")
            .appendField(new Blockly.FieldDropdown([["A-B", "0"], ["A", "1"], ["B", "2"]]), "MOTOR")
            .appendField(" Move backward");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(330);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['motordrive_l298_turn'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("Motor Driver L298 : Turn")
            .appendField(new Blockly.FieldDropdown([["LEFT", "0"], ["RIGHT", "1"]]), "MOTOR");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(330);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['motordrive_l298_stop'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("Motor Driver L298 : Stop");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(330);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};