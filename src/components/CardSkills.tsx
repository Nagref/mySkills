import React from "react";
import {
    TouchableOpacity,
    Text,
    StyleSheet,
    TouchableOpacityProps,
} from "react-native";

interface SkillCardProps extends TouchableOpacityProps {
    skill: string;
}

export function CardSkills({ skill, ...rest }: SkillCardProps) {
    return (
        <TouchableOpacity style={styles.buttonskills} {...rest}>
            <Text style={styles.textskills}>{skill}</Text>
        </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
    textskills: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "400",
    },
    buttonskills: {
        backgroundColor: "#313131",
        padding: 10,
        borderRadius: 20,
        alignItems: "center",
        marginVertical: 10,
    },
});