Blockly.JavaScript['motordrive_l298_begin1'] = function (block) {
    var value_in1 = Blockly.JavaScript.valueToCode(block, 'IN1', Blockly.JavaScript.ORDER_ATOMIC);
    var value_in2 = Blockly.JavaScript.valueToCode(block, 'IN2', Blockly.JavaScript.ORDER_ATOMIC);
    var value_in3 = Blockly.JavaScript.valueToCode(block, 'IN3', Blockly.JavaScript.ORDER_ATOMIC);
    var value_in4 = Blockly.JavaScript.valueToCode(block, 'IN4', Blockly.JavaScript.ORDER_ATOMIC);

    var code =
        `
#VARIABLE
int _IN1 = ${value_in1};
int _IN2 = ${value_in2};
int _IN3 = ${value_in3};
int _IN4 = ${value_in4};
#END

#FUNCTION
void _motor_A_forward() {
    digitalWrite(_IN1, LOW);
    digitalWrite(_IN2, HIGH);
}
void _motor_B_forward() {
    digitalWrite(_IN3, LOW);
    digitalWrite(_IN4, HIGH);
}
void _motor_A_backward() {
    digitalWrite(_IN1, HIGH);
    digitalWrite(_IN2, LOW);
}
void _motor_B_backward() {
    digitalWrite(_IN3, HIGH);
    digitalWrite(_IN4, LOW);
}
void _motor_A_stop() {
    digitalWrite(_IN1, HIGH);
    digitalWrite(_IN2, HIGH);
}
void _motor_B_stop() {
    digitalWrite(_IN3, HIGH);
    digitalWrite(_IN4, HIGH);
}
#END
pinMode(_IN1, OUTPUT);
pinMode(_IN2, OUTPUT);
pinMode(_IN3, OUTPUT);
pinMode(_IN4, OUTPUT);
\n`;
    return code;
};

Blockly.JavaScript['motordrive_l298_begin2'] = function (block) {
    var value_ena = Blockly.JavaScript.valueToCode(block, 'ENA', Blockly.JavaScript.ORDER_ATOMIC);
    var value_enb = Blockly.JavaScript.valueToCode(block, 'ENB', Blockly.JavaScript.ORDER_ATOMIC);
    var value_in1 = Blockly.JavaScript.valueToCode(block, 'IN1', Blockly.JavaScript.ORDER_ATOMIC);
    var value_in2 = Blockly.JavaScript.valueToCode(block, 'IN2', Blockly.JavaScript.ORDER_ATOMIC);
    var value_in3 = Blockly.JavaScript.valueToCode(block, 'IN3', Blockly.JavaScript.ORDER_ATOMIC);
    var value_in4 = Blockly.JavaScript.valueToCode(block, 'IN4', Blockly.JavaScript.ORDER_ATOMIC);
    var dropdown_channel_a = block.getFieldValue('CHANNEL_A');
    var dropdown_channel_b = block.getFieldValue('CHANNEL_B');

    var code =
        `
#VARIABLE
int _EN_A = ${value_ena};
int _EN_B = ${value_enb};
int _IN1 = ${value_in1};
int _IN2 = ${value_in2};
int _IN3 = ${value_in3};
int _IN4 = ${value_in4};
int _MotorA_ch = ${dropdown_channel_a};
int _MotorB_ch = ${dropdown_channel_b};
#END

#FUNCTION
void _motor_A_forward(int _channel, int _speed) {
    digitalWrite(_IN1, LOW);
    digitalWrite(_IN2, HIGH);
    ledcWrite(_channel, _speed);
}
void _motor_B_forward(int _channel, int _speed) {
    digitalWrite(_IN3, LOW);
    digitalWrite(_IN4, HIGH);
    ledcWrite(_channel, _speed);
}
void _motor_A_backward(int _channel, int _speed) {
    digitalWrite(_IN1, HIGH);
    digitalWrite(_IN2, LOW);
    ledcWrite(_channel, _speed);
}
void _motor_B_backward(int _channel, int _speed) {
    digitalWrite(_IN3, HIGH);
    digitalWrite(_IN4, LOW);
    ledcWrite(_channel, _speed);
}
void _motor_A_stop(int _channel) {
    digitalWrite(_IN1, HIGH);
    digitalWrite(_IN2, HIGH);
    ledcWrite(_channel, 0);
}
void _motor_B_stop(int _channel) {
    digitalWrite(_IN3, HIGH);
    digitalWrite(_IN4, HIGH);
    ledcWrite(_channel, 0);
}
#END

pinMode(_EN_A, OUTPUT);
pinMode(_IN1, OUTPUT);
pinMode(_IN2, OUTPUT);

pinMode(_EN_A, OUTPUT);
pinMode(_IN3, OUTPUT);
pinMode(_IN4, OUTPUT);

ledcSetup(_MotorA_ch, 5000, 8);
ledcAttachPin(_EN_A, _MotorA_ch);
ledcSetup(_MotorB_ch, 5000, 8);
ledcAttachPin(_EN_B, _MotorB_ch);
\n`;
    return code;
};

Blockly.JavaScript['motordrive_l298_forward'] = function (block) {
    var dropdown_channel_a = block.getFieldValue('MOTOR');
    if (dropdown_channel_a == 0) {
        var code = `_motor_A_forward();\n_motor_B_forward();\n`;
    } else if (dropdown_channel_a == 1) {
        var code = `_motor_A_forward();\n`;
    } if (dropdown_channel_a == 2) {
        var code = `_motor_B_forward();\n`;
    }
    return code;
};

Blockly.JavaScript['motordrive_l298_backward'] = function (block) {
    var dropdown_channel_a = block.getFieldValue('MOTOR');
    if (dropdown_channel_a == 0) {
        var code = `_motor_A_backward();\n_motor_B_backward();\n`;
    } else if (dropdown_channel_a == 1) {
        var code = `_motor_A_backward();\n`;
    } if (dropdown_channel_a == 2) {
        var code = `_motor_B_backward();\n`;
    }
    return code;
};

Blockly.JavaScript['motordrive_l298_turn'] = function (block) {
    var dropdown_channel_a = block.getFieldValue('MOTOR');
    if (dropdown_channel_a == 0) {
        var code = `_motor_A_forward();\n_motor_B_stop();\n`;
    } else if (dropdown_channel_a == 1) {
        var code = `_motor_B_forward();\n_motor_A_stop();\n`;
    }
    return code;
};

Blockly.JavaScript['motordrive_l298_stop'] = function (block) {
    var code = `_motor_A_stop();\n_motor_B_stop();\n`;
    return code;
};

// Blockly.JavaScript['motordrive_l298_forward'] = function (block) {
//     var dropdown_channel_a = block.getFieldValue('MOTOR');
//     var number_pwm = block.getFieldValue('PWM');
//     if (dropdown_channel_a == 0) {
//         var code = `_forward1(_MotorA_ch, ${number_pwm});\n_forward2(_MotorB_ch, ${number_pwm});\n`;
//     } else if (dropdown_channel_a == 1) {
//         var code = `_forward1(_MotorA_ch, ${number_pwm});\n`;
//     } if (dropdown_channel_a == 2) {
//         var code = `_forward2(_MotorB_ch, ${number_pwm});\n`;
//     }
//     return code;
// };

// Blockly.JavaScript['motordrive_l298_backward'] = function (block) {
//     var dropdown_channel_a = block.getFieldValue('MOTOR');
//     var number_pwm = block.getFieldValue('PWM');
//     if (dropdown_channel_a == 0) {
//         var code = 
//         `
//         _backward1(_MotorA_ch, ${number_pwm});\n
//         _backward2(_MotorB_ch, ${number_pwm});\n
//         `;
//     } else if (dropdown_channel_a == 1) {
//         var code = `_backward1(_MotorA_ch, ${number_pwm});\n`;
//     } if (dropdown_channel_a == 2) {
//         var code = `_backward2(_MotorB_ch, ${number_pwm});\n`;
//     }
//     return code;
// };